// "use client"

// import { useState } from "react"
// import { Mail, MessageSquare, Send } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

// export function ContactSection() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1000))
    
//     setIsSubmitting(false)
//     setIsSubmitted(true)
//     setFormState({ name: "", email: "", message: "" })
    
//     // Reset success message after 5 seconds
//     setTimeout(() => setIsSubmitted(false), 5000)
//   }

//   return (
//     <section id="contact" className="py-20 sm:py-32">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-12 lg:grid-cols-2">
//           <div>
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
//               Contact Us
//             </div>
//             <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//               Get in Touch
//             </h2>
//             <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
//               Have questions, feedback, or suggestions? We&apos;d love to hear from you. 
//               Send us a message and we&apos;ll respond as soon as possible.
//             </p>

//             <div className="mt-8 space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
//                   <Mail className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-foreground">Email</h3>
//                   <p className="text-muted-foreground">support@smartbill.com</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-4">
//                 <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
//                   <MessageSquare className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-foreground">Live Chat</h3>
//                   <p className="text-muted-foreground">Available Mon-Fri, 9am-5pm EST</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Card className="border-border/50 bg-card shadow-xl shadow-primary/5">
//             <CardHeader>
//               <CardTitle>Send a Message</CardTitle>
//               <CardDescription>
//                 Fill out the form below and we&apos;ll get back to you shortly.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               {isSubmitted ? (
//                 <div className="flex flex-col items-center justify-center py-8 text-center">
//                   <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
//                     <Send className="h-8 w-8 text-primary" />
//                   </div>
//                   <h3 className="mb-2 text-xl font-semibold text-foreground">Message Sent!</h3>
//                   <p className="text-muted-foreground">
//                     Thank you for reaching out. We&apos;ll respond to your inquiry soon.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit}>
//                   <FieldGroup>
//                     <Field>
//                       <FieldLabel htmlFor="name">Name</FieldLabel>
//                       <Input
//                         id="name"
//                         type="text"
//                         placeholder="Your name"
//                         value={formState.name}
//                         onChange={(e) => setFormState({ ...formState, name: e.target.value })}
//                         required
//                       />
//                     </Field>
                    
//                     <Field>
//                       <FieldLabel htmlFor="email">Email</FieldLabel>
//                       <Input
//                         id="email"
//                         type="email"
//                         placeholder="your@email.com"
//                         value={formState.email}
//                         onChange={(e) => setFormState({ ...formState, email: e.target.value })}
//                         required
//                       />
//                     </Field>
                    
//                     <Field>
//                       <FieldLabel htmlFor="message">Message</FieldLabel>
//                       <Textarea
//                         id="message"
//                         placeholder="How can we help you?"
//                         rows={4}
//                         value={formState.message}
//                         onChange={(e) => setFormState({ ...formState, message: e.target.value })}
//                         required
//                       />
//                     </Field>
                    
//                     <Button type="submit" className="w-full" disabled={isSubmitting}>
//                       {isSubmitting ? (
//                         "Sending..."
//                       ) : (
//                         <>
//                           Send Message
//                           <Send className="ml-2 h-4 w-4" />
//                         </>
//                       )}
//                     </Button>
//                   </FieldGroup>
//                 </form>
//               )}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }







"use client"

import { useState } from "react"
import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xojpeygz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormState({ name: "", email: "", message: "" })
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("Error submitting form.")
    }

    setIsSubmitting(false)

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Contact Us
            </div>
            <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Have questions, feedback, or suggestions? We&apos;d love to hear from you. 
              Send us a message and we&apos;ll respond as soon as possible.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  {/* Replace with your real domain email */}
                  <p className="text-muted-foreground">support@yourdomain.com</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-border/50 bg-card shadow-xl shadow-primary/5">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We&apos;ll respond to your inquiry soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="name">Name</FieldLabel>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                      />
                    </Field>
                    
                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@yourdomain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                      />
                    </Field>
                    
                    <Field>
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        required
                      />
                    </Field>
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </FieldGroup>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}