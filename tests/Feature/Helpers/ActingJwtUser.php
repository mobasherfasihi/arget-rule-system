<?php

namespace Tests\Feature\Helpers;

use Tymon\JWTAuth\Facades\JWTAuth;

trait ActingJwtUser
{
    /**
     * Call the given URI with a JSON request and with an
     * authenticated user.
     *
     * @param  string  $user
     * @param  string  $method
     * @param  string  $uri
     * @param  array  $data
     * @param  array  $headers
     * @param  array  $cookies
     * @return \Illuminate\Foundation\Testing\TestResponse
     */
    public function jsonAs($user, $method, $uri, array $data = [], array $headers = [], array $cookies = [])
    {
        $headers = array_merge([
            'Authorization' => 'Bearer ' . JWTAuth::fromUser($user),
        ], $headers);

        return $this->json($method, $uri, $data, $headers, $cookies);
    }

    /**
     * Call the given URI with a JSON request.
     *
     * @param  string  $method
     * @param  string  $uri
     * @param  array  $data
     * @param  array  $headers
     * @param  array  $cookies
     * @return \Illuminate\Foundation\Testing\TestResponse
     */
    public function json($method, $uri, array $data = [], array $headers = [], array $cookies = [])
    {
        $files = $this->extractFilesFromDataArray($data);

        $content = json_encode($data);

        $headers = array_merge([
            'CONTENT_LENGTH' => mb_strlen($content, '8bit'),
            'CONTENT_TYPE' => 'application/json',
            'Accept' => 'application/json',
        ], $headers);

        return $this->call(
            $method,
            $uri,
            [],
            $cookies,
            $files,
            $this->transformHeadersToServerVars($headers),
            $content
        );
    }
}
