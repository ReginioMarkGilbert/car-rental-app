import { NextResponse } from 'next/server';

// This would typically be in a database
const users: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, ...userData } = body;

    if (type === 'signup') {
      // Check if user already exists
      const existingUser = users.find(user => user.email === userData.email);
      if (existingUser) {
        return NextResponse.json(
          { error: 'User already exists' },
          { status: 400 }
        );
      }

      // In a real app, you would:
      // 1. Hash the password
      // 2. Store in database
      users.push(userData);

      return NextResponse.json(
        { message: 'User created successfully' },
        { status: 201 }
      );
    }

    if (type === 'signin') {
      // Find user
      const user = users.find(u => u.email === userData.email);
      if (!user || user.password !== userData.password) {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        );
      }

      // In a real app, you would:
      // 1. Verify password hash
      // 2. Generate JWT token
      return NextResponse.json(
        {
          message: 'Signed in successfully',
          user: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
          }
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: 'Invalid request type' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
