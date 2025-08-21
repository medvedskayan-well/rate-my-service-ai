interface AppealInfoProps {
  appealNumber: string;
  submissionDate: string;
  completionDate: string;
  serviceResponse: string;
  labels: {
    appealNumber: string;
    submissionDate: string;
    completionDate: string;
    serviceResponse: string;
  };
}

export const AppealInfo = ({ 
  appealNumber, 
  submissionDate, 
  completionDate, 
  serviceResponse,
  labels 
}: AppealInfoProps) => {
  return (
    <div className="bg-muted rounded-lg p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <dt className="text-sm font-medium text-muted-foreground mb-1">
            {labels.appealNumber}
          </dt>
          <dd className="text-lg font-semibold text-foreground">
            #{appealNumber}
          </dd>
        </div>
        
        <div>
          <dt className="text-sm font-medium text-muted-foreground mb-1">
            {labels.submissionDate}
          </dt>
          <dd className="text-foreground">
            {submissionDate}
          </dd>
        </div>
        
        <div>
          <dt className="text-sm font-medium text-muted-foreground mb-1">
            {labels.completionDate}
          </dt>
          <dd className="text-foreground">
            {completionDate}
          </dd>
        </div>
      </div>
      
      <div>
        <dt className="text-sm font-medium text-muted-foreground mb-2">
          {labels.serviceResponse}
        </dt>
        <dd className="text-foreground text-sm leading-relaxed">
          {serviceResponse}
        </dd>
      </div>
    </div>
  );
};