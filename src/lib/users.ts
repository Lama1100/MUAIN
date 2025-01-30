import prisma from '@/lib/prisma'
import { User } from '@prisma/client'
import { Pool } from 'pg';
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
});

export async function createUser(data: User) {
  try {
    console.log('Creating user with data:', data); // Log the input data
    const user = await prisma.user.create({ data });
    console.log('User created successfully:', user); // Log the created user
    return { user };
  } catch (error) {
    console.error('Error creating user:', error); // Log the error
    return { error };
  }
}

export async function getUserById({
  id,
  clerkUserId
}: {
  id?: string
  clerkUserId?: string
}) {
  try {
    if (!id && !clerkUserId) {
      throw new Error('id or clerkUserId is required')
    }

    const query = id ? { id } : { clerkUserId }

    const user = await prisma.user.findUnique({ where: query })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function UpdateUser(id: string, data: Partial<User>) {
  try {
    const user = await prisma.user.update({
      where: { id },
      data
    })
    return { user }
  } catch (error) {
    return { error }
  }
}