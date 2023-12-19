import { NextResponse } from "next/server";

export async function POST(request) {
    const requestBody = await request.json();
    console.log(requestBody);
    return NextResponse.json({requestBody}, {status: 200});
}