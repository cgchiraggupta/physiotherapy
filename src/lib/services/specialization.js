"use server";

import { prisma } from "../prisma";

// Fetch all active specializations
export async function getSpecializations() {
  try {
    const specializations = await prisma.specialization.findMany({
      where: {
        isActive: true
      },
      select: {
        id: true,
        name: true,
        description: true
      },
      orderBy: {
        name: 'asc'
      }
    });

    return {
      success: true,
      data: specializations
    };
  } catch (error) {
    console.error('Error fetching specializations:', error);
    return {
      success: false,
      message: 'Failed to fetch specializations'
    };
  }
}