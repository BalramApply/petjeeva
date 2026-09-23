import { useParams } from 'react-router-dom';
import { adminNavItems } from '../../data/adminNav';

export default function AdminComingSoon() {
  const { section } = useParams();
  const item = adminNavItems.find((i) => i.path === `/admin/${section}`);

  return (
    <div className="p-8">
      <h1 className="text-h2 font-heading">{item?.label || 'Coming soon'}</h1>
      <p className="mt-2 text-text-secondary">
        This section is built in Phase {item?.builtInPhase ?? '—'} and will appear here once ready.
      </p>
    </div>
  );
}
