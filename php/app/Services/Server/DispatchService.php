<?php

namespace App\Services\Server;

use App\Services\Output\LogService as Log;

/**
 * ルートごとの処理
 */
class DispatchService
{
    public function exec(string $method, string $uri, ?array $jsonData): array
    {
        $data = [
            'method' => $method,
            'uri' => $uri,
            'message' => 'テストメッセージ',
            'jsonData' => $jsonData,
        ];

        if (!isset($_SESSION['cnt'])) $_SESSION['cnt'] = 0;
        
        $_SESSION['cnt'] ++;

        return $data;
    }
}
