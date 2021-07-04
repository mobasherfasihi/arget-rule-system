<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;

class AuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    // use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

     /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        request()->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $credentials = request(['email', 'password']);


        if (!$token = auth('api')->attempt($credentials, true)) {
            return response()->json(['error' => 'Wrong Email or Password'], 401);
        }
        $deactivationTime = auth()->user()->deactivate_time  ? strtotime(auth()->user()->deactivate_time) - strtotime(date('Y-m-d H:i:s')) : null;
        if ($deactivationTime && $deactivationTime < 0)
            return response()->json(['error' => 'Account Deleted', 'notActive' => true], 403);

        return $this->respondWithToken($token);
    }

/**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    public function register(UserRequest $data)
    {
        $user = new User();
        $user->name = $data['name'];
        $user->email = strtolower($data['email']);
        $user->password = bcrypt($data['password']);
        $user->save();

        return response()->Json($user);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'userData' => auth()->user(),
            'accessToken' => $token,
            'token_type' => 'bearer',
            'expires_in' => config('jwt.ttl')
        ])->header('Authorization', 'Bearer ' . $token);
    }
}
