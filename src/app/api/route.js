import Contacts from "@/lib/models/contact";
import connectDb from "@/lib/mongoDb/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    // console.log(data);
    await connectDb();
    await Contacts.create(data);
    return NextResponse.json(
      { message: "Topic Created Successful" },
      { status: 201 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Error sending message" },
      { status: 500 },
    );
  }
}
