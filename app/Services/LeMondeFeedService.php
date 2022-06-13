<?php


namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Psr7;
use GuzzleHttp\RequestOptions;
use Illuminate\Support\Facades\Log;

class LeMondeFeedService
{
    private string $apiBaseUri = 'https://www.lemonde.fr/';

    /**
     * @return Client
     */
    private function getClient()
    {
        $headers = [
            'Accept' => '*/*',
            'Cache-Control' => 'no-cache',
        ];

        return new Client([
            'base_uri' => $this->apiBaseUri,
            RequestOptions::TIMEOUT => 15,
            RequestOptions::CONNECT_TIMEOUT => 5,
            RequestOptions::DEBUG => false,
            RequestOptions::VERIFY => false,
            RequestOptions::ALLOW_REDIRECTS => false,
            RequestOptions::HEADERS => $headers,
        ]);
    }

    /**
     * Get Items form LeMonde RSS
     *
     * @throws GuzzleException
     *
     * @return array|null
     */
    public function getLeMondeFeedUne()
    {
        $array = [];

        try {
            //https://www.lemonde.fr/rss/une.xml
            $response = $this->getClient()->request('GET' ,'rss/une.xml');
            $xml = simplexml_load_string($response->getBody()->getContents(), null, LIBXML_NOCDATA);
            foreach($xml->channel->item as $item) {
                $media = $item->children('media', True)->content->attributes();
                $itemRSS = array (
                    'title' => (string) $item->title,
                    'description' => (string) $item->description,
                    'link' => (string) $item->link,
                    'date' => (string) $item->pubDate,
                    'media' => (string) $media->url,
                );
                $array[] = $itemRSS;
            }

            return $array;
        } catch (GuzzleException $exception) {
            Log::error(' getLeMondeFeedUne request failed', [
                'method'        => __METHOD__,
                'error'         => $exception->getMessage(),
                'request'  => ($request = $exception->getRequest()) ? Psr7\Message::toString($request) : null,
                'response' => ($response = $exception->getRequest()) ? Psr7\Message::toString($response) : null,
            ]);
        }

        return $array;
    }

}
