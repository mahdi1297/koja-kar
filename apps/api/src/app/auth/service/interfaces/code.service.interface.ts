import { Code } from '@dev/domain';

export interface ICodeService {
  create(data: Code);
  validate(code: string, userId: string): Promise<Code>;
  deActiveCode(_id: string);
}
