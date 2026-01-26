import { http, HttpResponse } from 'msw'

// import {
// 	MOCK_CURRENT_DASH_LIST,
// 	MOCK_OPEN_DASH_LIST
// } from '../mock_data/dashData';

import {
  MOCK_USER_LIST,
  UserConfigData
} from '../mock_data/userData';
import { AuthFormSubmission, RegisterFormSubmission } from './types';

type SessionData = {
  token: string;
  userId: number;
  expiresAt: number;
};

// In-memory data store
const userList = MOCK_USER_LIST;

let currentSession: SessionData | null = null;

export const handlers = [
  // AUTH
  http.post('/api/auth/login', async ({ request }) => {
    const { email, password } = await request.json() as AuthFormSubmission;
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Find user
    const user = userList.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return HttpResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }
    
    // Create session token (in real app, use JWT or similar)
    const token = `${Date.now()}`;
    currentSession = {
      token,
      userId: user.id,
      expiresAt: Date.now() + 1000 * 60 * 60 // 1 hour
    };
    
    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    
    return HttpResponse.json({
      user: userWithoutPassword,
      token
    });
  }),
  http.post('/api/auth/logout', () => {
    currentSession = null
    return HttpResponse.json({ message: 'Logged out successfully' })
  }),

  // user data
  http.get('/api/auth/me', ({ request }) => {
    const authHeader = request.headers.get('Authorization')
    const token = authHeader?.replace('Bearer ', '')
    
    if (!token || !currentSession || currentSession.token !== token) {
      return HttpResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    if (currentSession.expiresAt < Date.now()) {
      currentSession = null
      return HttpResponse.json(
        { message: 'Session expired' },
        { status: 401 }
      )
    }
    
    const user = userList.find(u => u.id === currentSession?.userId)
    return HttpResponse.json(user)
  }),

 // ----------Protected route example---------------
  http.get('/api/users', ({ request }) => {
    const authHeader = request.headers.get('Authorization')
    const token = authHeader?.replace('Bearer ', '')
    
    if (!token || !currentSession || currentSession.token !== token) {
      return HttpResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    return HttpResponse.json(
      userList.map(({ password, ...user }) => user)
    )
  }),

  // Register endpoint (optional)
  http.post('/api/auth/register', async ({ request }) => {
    const { username, email, password } = await request.json() as RegisterFormSubmission;
    
    // Check if user already exists
    if (userList.find(u => u.email === email)) {
      return HttpResponse.json(
        { message: 'User already exists' },
        { status: 409 }
      )
    }
    
    // Create new user
    const newUser = {
      id: userList.length + 1,
      username,
      email,
      password
    } as UserConfigData;
    userList.push(newUser)
    
    const { password: _, ...userWithoutPassword } = newUser
    return HttpResponse.json(userWithoutPassword, { status: 201 })
  }),

  // GET request
  http.get('/api/users', () => {
    return HttpResponse.json(userList)
  }),

  // GET single user
  http.get('/api/users/:id', ({ params }) => {
    const user = userList.find(u => u.id === Number(params.id))
    if (!user) {
      return new HttpResponse(null, { status: 404 })
    }
    return HttpResponse.json(user)
  }),

  // POST request
  // http.post('/api/users', async ({ request }) => {
  //   const newUser = await request.json()
  //   const user = { ...newUser, id: users.length + 1 }
  //   users.push(user)
  //   return HttpResponse.json(user, { status: 201 })
  // }),

  // PUT request
  // http.put('/api/users/:id', async ({ params, request }) => {
  //   const updates = await request.json()
  //   const index = users.findIndex(u => u.id === Number(params.id))
    
  //   if (index === -1) {
  //     return new HttpResponse(null, { status: 404 })
  //   }
    
  //   users[index] = { ...users[index], ...updates }
  //   return HttpResponse.json(users[index])
  // }),

  // DELETE request
  // http.delete('/api/users/:id', ({ params }) => {
  //   users = users.filter(u => u.id !== Number(params.id))
  //   return new HttpResponse(null, { status: 204 })
  // })
];