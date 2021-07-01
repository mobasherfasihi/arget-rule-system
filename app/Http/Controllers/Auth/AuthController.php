<?php
namespace App\Http\Controllers\Auth;

use App\Domain\Users\Models\User;
use App\Http\Controllers\Controller;

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

        if (!$token = auth()->attempt($credentials, true)) {
            return response()->json(['error' => 'Wrong Email or Password'], 401);
        }

        if (User::findByColumn('email', request('email'))->verified()->count() == 0) {
            auth()->logout();
            return response()->json(['verify' => false], 403);
        }

        return $this->respondWithToken($token);
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
