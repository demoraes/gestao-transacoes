// import AppError from '../errors/AppError';
import { getRepository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: string;
  type: string;
  category_id: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    category_id,
    type,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getRepository(Transaction);

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
      category_id,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
