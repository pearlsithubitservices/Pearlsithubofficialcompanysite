import connectDB from '@/lib/mongodb'
import Contact from '@/models/contact'

export async function POST(req) {

  try {

    await connectDB()

    const body = await req.json()

    console.log('Form Data:', body)

    const savedContact = await Contact.create(body)

    console.log('Saved:', savedContact)

    return Response.json({
      success: true,
      savedContact,
    })

  } catch (error) {

    console.log('SAVE ERROR:', error)

    return Response.json({
      success: false,
      message: 'Save failed',
    })
  }
}