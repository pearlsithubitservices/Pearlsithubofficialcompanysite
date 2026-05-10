'use client'

import { useEffect, useState } from 'react'

export default function AdminPage() {

  const [contacts, setContacts] = useState([])

  useEffect(() => {

    fetchContacts()

  }, [])

  const fetchContacts = async () => {

    const response = await fetch('/api/admin/contacts')

    const data = await response.json()
if (data.success) {
      setContacts(data.contacts)
    }
  }

  return (

    <div className="min-h-screen p-10 bg-gray-100">

      <h1 className="text-4xl font-bold mb-10">
        Contact Leads
      </h1>

      <div className="grid gap-6">

        {contacts.map((contact) => (

          <div
            key={contact._id}
            className="bg-white rounded-2xl p-6 shadow"
          > <h2 className="text-2xl font-bold">
              {contact.name}
            </h2>

            <p className="text-gray-600 mt-2">
              {contact.email}
            </p>

            <p className="mt-3 font-medium text-blue-600">
              {contact.service}
            </p>

            <p className="mt-4 text-gray-700">
              {contact.message}
            </p>

            <p className="mt-4 text-sm text-gray-400">
              {new Date(contact.createdAt).toLocaleString()}
            </p>
</div>
  

        ))}

      </div>

    </div>
  )
}