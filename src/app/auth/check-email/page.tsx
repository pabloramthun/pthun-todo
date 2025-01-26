import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CheckEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Check Your Email</CardTitle>
          <CardDescription>We've sent you a magic link</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Please check your email for a magic link to sign in. If you don't see it, you may need to check your spam
            folder.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

