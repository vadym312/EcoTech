import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with TechGear Pro for any questions or support.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-6 text-base font-semibold text-gray-900">Sales</h3>
          <p className="mt-2 text-base text-gray-500">
            +1 (555) 123-4567
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-6 text-base font-semibold text-gray-900">Support</h3>
          <p className="mt-2 text-base text-gray-500">
            support@techgearpro.com
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-6 text-base font-semibold text-gray-900">Office</h3>
          <p className="mt-2 text-base text-gray-500">
            123 Tech Street, San Francisco, CA 94105
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="rounded-lg bg-white shadow-lg">
          <form className="py-10 px-6 sm:px-10">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  className="mt-1"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  className="mt-1"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="mt-1"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  className="mt-1"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1"
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" className="w-full">
                  Send message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}