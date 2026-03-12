<?php

namespace App\Services\Server;

use App\Services\Output\LogService;

/**
 * ルーター
 */
class RouterService
{
    public function exec(): void
    {
        $this->init();
        $this->dispatch();
    }

    /** 初期処理 */
    private function init(): void
    {
        // header() は PHP のスクリプトの先頭に置く
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type");

        // OPTIONS リクエストは事前検証（preflight）用なので早期終了
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit();
        }
    }

    /** Jsonのリクエストデータを取得 */
    private function getJsonRequestData(): array
    {
        $json = file_get_contents("php://input");
        $data = json_decode($json, true);
        return $data;
    }

    /** URIごとの処理 */
    private function dispatch(): void
    {
        $method = $_SERVER['REQUEST_METHOD'];
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

        $jsonData = $this->getJsonRequestData();

        $data = [
            'method' => $method,
            'uri' => $uri,
            'message' => 'テストメッセージ',
            'jsonData' => $jsonData,
        ];

        LogService::output("data", $data);
        LogService::output("jsonData", $jsonData);

        echo json_encode($data);
    }
}
