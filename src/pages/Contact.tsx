import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { SEO } from '@/lib/hooks/useSEO';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactService } from '@/lib/api/ContactService';
import { useState } from 'react';

const Schema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Please add more details'),
});

type FormValues = z.infer<typeof Schema>;

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({ resolver: zodResolver(Schema) });

  const onSubmit = async (values: FormValues) => {
    setStatus('loading');
    try {
      await ContactService.sendMessage(values);
      setStatus('success');
      reset();
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <>
      <SEO title="Contact — StarSmith" />
      <Container className="py-12">
        <SectionHeader title="Let's talk" subtitle="Tell us about your project and goals." />
        <Card>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div>
              <label className="text-sm">Name</label>
              <input {...register('name')} className="mt-1 w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input {...register('email')} className="mt-1 w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea rows={5} {...register('message')} className="mt-1 w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" />
              {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
            </div>

            <div className="flex items-center gap-3">
              <Button disabled={status==='loading'}>{status==='loading' ? 'Sending…' : 'Send message'}</Button>
              {status==='success' && <span className="text-sm text-green-600">Thanks! We'll get back within 1–2 business days.</span>}
              {status==='error' && <span className="text-sm text-red-600">Something went wrong. Try again.</span>}
            </div>
          </form>
        </Card>
      </Container>
    </>
  );
}
