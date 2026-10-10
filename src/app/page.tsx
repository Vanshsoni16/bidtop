import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Container } from '@/components/ui/container';
import { formatINR } from '@/lib/utils';

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-50 py-20">
      <Container>
        <h1 className="text-4xl font-bold text-navy-900 mb-2">
          Design System Test
        </h1>
        <p className="text-navy-600 mb-8">
          If you see this styled, everything works.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="gold">Gold</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="success">✓ Verified</Badge>
              <Badge variant="gold">🏆 #1</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="danger">Danger</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Input</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                label="Business name"
                placeholder="Enter name"
                hint="This will appear on your profile"
              />
              <Input
                label="Email"
                placeholder="you@example.com"
                error="This email is already registered"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Formatted currency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-navy-900">
                {formatINR(150000)}
              </div>
              <p className="text-sm text-navy-500 mt-1">
                Should show as ₹1,50,000
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </main>
  );
}