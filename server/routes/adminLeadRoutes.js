import { Router } from 'express';
import { requireAdminAuth } from '../middleware/requireAdminAuth.js';
import { validateLead } from '../validators/leadValidator.js';
import { listLeads, createLead, updateLead } from '../controllers/adminLeadController.js';

const router = Router();

router.use(requireAdminAuth);
router.get('/', listLeads);
router.post('/', validateLead, createLead);
router.patch('/:id', updateLead);

export default router;
