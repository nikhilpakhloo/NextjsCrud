import { connect } from "@/connect/connect"
import { Contacts } from "@/contactschema/Contact";
import { NextResponse } from "next/server";
connect()

export const POST = async (req) => {
    const { Name, Email, Address, Phone } = await req.json();
    try {

        const newcontact = await Contacts.create(
            {
                Name,
                Email,
                Address,
                Phone,
            }
        )
        return NextResponse.json(newcontact)

    } catch (error) {
        throw new Error(error.message)

    }
}
export const GET = async (req) => {
    try {
        const getContacts = await Contacts.find()
        return NextResponse.json(getContacts)

    } catch (error) {
        throw new Error(error.message)

    }
}
export const DELETE = async (req) => {
    const id = req.nextUrl.searchParams.get("id")
    try {
        await Contacts.findByIdAndDelete(id)
        return NextResponse.json({ msg: "Contact is deleted" }, { status: 200 })

    } catch (error) {
        throw new Error(error.message)

    }
}