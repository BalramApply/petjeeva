import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import Button from '../../components/ui/Button';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { businessInfo } from '../../data/businessInfo';

export default function AdminLogin() {
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | error
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    const result = await login(email, password);

    if (result.success) {
      navigate('/admin');
    } else {
      setStatus('error');
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-8 shadow-card">
        <p className="text-center font-heading text-xl font-bold text-forest">{businessInfo.name}</p>
        <h1 className="mt-1 text-center text-h3 font-heading">Admin login</h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="field-label">Email</label>
            <input
              className="field-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="field-label">Password</label>
            <input
              className="field-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {status === 'error' && <p className="field-error">{error}</p>}

          <Button
            type="submit"
            variant="primary"
            disabled={status === 'submitting'}
            className="w-full justify-center"
          >
            {status === 'submitting' && <Loader2 size={18} className="animate-spin" />}
            {status === 'submitting' ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>
      </div>
    </div>
  );
}
