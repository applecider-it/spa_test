<?php

namespace App\Services\Server;

use App\Services\Output\LogService as Log;

/**
 * ルートごとの処理
 */
class DispatchService
{
    function __construct(
        private string $method,
        private string $uri,
        private ?array $jsonData,
    ) {}

    public function exec(): array
    {
        if ($this->uri === '/send-test') {
            return $this->execSendTest();
        } else if ($this->uri === '/auth') {
            return $this->execAuth();
        } else if ($this->uri === '/login') {
            return $this->execLogin();
        } else if ($this->uri === '/logout') {
            return $this->execLogout();
        }

        return [
            'error' => 'invalid uri',
        ];
    }

    /** 送信テスト */
    private function execSendTest(): array
    {
        $data = [
            'method' => $this->method,
            'uri' => $this->uri,
            'message' => 'テストメッセージ ' . $this->jsonData['message'],
            'jsonData' => $this->jsonData,
        ];

        if (!isset($_SESSION['cnt'])) $_SESSION['cnt'] = 0;

        $_SESSION['cnt']++;

        return $data;
    }

    /** 認証チェック */
    private function execAuth(): array
    {
        usleep(1000000 * 0.3);

        $userId = $_SESSION['user_id'] ?? null;

        $user = null;
        if ($userId) {
            $user = [
                'name' => 'テスト',
            ];
        }
        $data = [
            'user' => $user,
        ];

        return $data;
    }

    /** ログイン */
    private function execLogin(): array
    {
        $_SESSION['user_id'] = 1;

        return [
            'status' => true,
        ];
    }

    /** ログアウト */
    private function execLogout(): array
    {
        unset($_SESSION['user_id']);

        return [
            'status' => true,
        ];
    }
}
