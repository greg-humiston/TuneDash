import { SetupWorker, setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers) as SetupWorker;

export default worker as SetupWorker;