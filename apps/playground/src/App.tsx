import { Button } from '@michailozdemir/apps-components/button';

function App() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Component Library Playground</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Button Component</h2>

          <div className="space-y-8">
            {/* Variants */}
            <div>
              <h3 className="text-lg font-medium mb-3">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button> Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-lg font-medium mb-3">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">🚀</Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-lg font-medium mb-3">States</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Enabled</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            {/* Interactive */}
            <div>
              <h3 className="text-lg font-medium mb-3">Interactive</h3>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => alert('Button clicked!')}>Click me</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
