import GdprRequestForm from '@/components/GdprRequestForm';

const GdprRequest = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">GDPR Data Request</h1>
          <p className="text-muted-foreground text-lg">
            Exercise your rights under the General Data Protection Regulation
          </p>
        </div>
        
        <GdprRequestForm />
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Need help? Contact our Data Protection Officer at{' '}
            <a href="mailto:dpo@nmtplatform.com" className="text-primary hover:underline">
              dpo@nmtplatform.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GdprRequest;