import { Code } from '@dev/domain';

export interface CodeApplicationContracts {
  sendCode(code: string, userId: string): Promise<Code>;
  removeCode(_id: string);
}
