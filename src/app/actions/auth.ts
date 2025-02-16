"use server"

import { redirect } from "next/navigation"

export async function sendMagicLink(formData: FormData) {
  const email = formData.get("email")

  // Here you would typically integrate with your authentication service
  // to actually send the magic link. For this example, we'll simulate it.
  console.log(`Magic link sent to: ${email}`)

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Redirect to a confirmation page
  redirect("/auth/check-email")
}

