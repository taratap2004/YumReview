import { createClient } from '@supabase/supabase-js'
import { getSession } from 'next-auth/react'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

export async function GET() {
    const { data, error } = await supabase.from('restaurants').select('*')
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data)
}

export async function POST(req) {
    const session = await getSession({ req })
    if (!session || session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { name, location, cuisine } = await req.json()
    const { data, error } = await supabase.from('restaurants').insert([{ name, location, cuisine }])
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data)
}

export async function DELETE(req) {
    const session = await getSession({ req })
    if (!session || session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await req.json()
    const { error } = await supabase.from('restaurants').delete().match({ id })
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ message: 'Deleted successfully' })
}