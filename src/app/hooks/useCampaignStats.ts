import { useState, useEffect } from "react"

export interface CampaignStats {
    goal: number
    raised: number
    donors: number
    loading: boolean
    error: string | null
    lastUpdated: Date | null
}

const FALLBACK = {
    goal: 100_000_000,
    raised: 40_000_000,
    donors: 18_400,
}

const POLL_MS = 5 * 60 * 1000 // re-fetch every 5 minutes

// Published Google Sheet CSV URL — update this if the sheet changes
const SHEET_CSV_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTSGU9tafne0tavY4L5LUWtzgWnz56BwgRbz4_nmJUwchtjlAiT-B23RySu33gva_phTVRjfauqwGS2/pub?gid=0&single=true&output=csv"

async function fetchSheet(): Promise<typeof FALLBACK> {
    const res = await fetch(SHEET_CSV_URL)
    if (!res.ok) throw new Error(`Google Sheets responded with ${res.status}`)
    const text = await res.text()

    // Expected sheet layout (row 1 = headers, skipped):
    //   field   | value
    //   goal    | 100000000
    //   raised  | 40000000
    //   donors  | 10000
    const map: Record<string, number> = {}
    const lines = text.trim().split("\n").slice(1) // drop header row
    for (const line of lines) {
        const comma = line.indexOf(",")
        if (comma === -1) continue
        const key = line.slice(0, comma).trim().toLowerCase().replace(/"/g, "")
        const raw = line
            .slice(comma + 1)
            .trim()
            .replace(/"/g, "")
            .replace(/[^0-9.]/g, "")
        const num = parseFloat(raw)
        if (key && !isNaN(num)) map[key] = num
    }

    return {
        goal: map["goal"] ?? FALLBACK.goal,
        raised: map["raised"] ?? FALLBACK.raised,
        donors: map["donors"] ?? FALLBACK.donors,
    }
}

export function useCampaignStats(): CampaignStats {
    const [stats, setStats] = useState<CampaignStats>({
        ...FALLBACK,
        loading: true,
        error: null,
        lastUpdated: null,
    })

    useEffect(() => {
        let cancelled = false

        async function load() {
            try {
                const data = await fetchSheet()
                if (!cancelled) {
                    setStats({
                        ...data,
                        loading: false,
                        error: null,
                        lastUpdated: new Date(),
                    })
                }
            } catch (err) {
                if (!cancelled) {
                    setStats((prev) => ({
                        ...prev,
                        loading: false,
                        error: err instanceof Error ? err.message : String(err),
                    }))
                }
            }
        }

        load()
        const id = setInterval(load, POLL_MS)
        return () => {
            cancelled = true
            clearInterval(id)
        }
    }, []) // no dependency — always runs on mount

    return stats
}

// ─── Formatting helpers ───────────────────────────────────────────────────────

export function fmtMoney(n: number): string {
    if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(0)}B`
    if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(0)}M`
    if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
    return `$${n.toLocaleString()}`
}

export function fmtDonors(n: number): string {
    return n.toLocaleString()
}

export function fmtPct(raised: number, goal: number): string {
    if (!goal) return "0%"
    return `${Math.round((raised / goal) * 100)}%`
}

export function pctNum(raised: number, goal: number): number {
    if (!goal) return 0
    return Math.min(100, Math.round((raised / goal) * 100))
}
