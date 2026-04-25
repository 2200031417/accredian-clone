export async function POST(req) {
    const body = await req.json();
    console.log("Lead:", body);
  
    return Response.json({ message: "Success" });
  }