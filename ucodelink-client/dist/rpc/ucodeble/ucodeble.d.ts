export class UcodeBleRPCAdapter extends BaseRPCAdapter {
    constructor(rpcClient: any);
    _devices: any[];
    _openRequests: Map<any, any>;
    _requestID: number;
    _discovering: boolean;
    requestDevice(options: any): Promise<any>;
    _device: any;
    _clientId: any;
    requestDeviceOptions: any;
    stopDiscover(): Promise<any>;
    connect(options: any): Promise<any>;
    disconnect(options: any): Promise<void>;
    getServices(): Promise<any>;
    writeValue(serviceId: any, characteristicId: any, message: any, encoding?: any, withResponse?: any): Promise<any>;
    startNotifications(serviceId: any, characteristicId: any, optStartNotifications?: boolean): Promise<any>;
    stopNotifications(serviceId: any, characteristicId: any): Promise<void>;
    onDeviceDiscovered(devices: any): void;
    didReceiveCall(method: any, params: any): void;
    _handleRequest(json: any): void;
    _sendResponse(id: any, result: any, error: any): void;
    _handleMessage(datas: any): void;
    _handleResponse(json: any): void;
    close(): Promise<any>;
    send(data: any, async?: boolean): Promise<any>;
    open(): Promise<any>;
    _subcribe(): void;
    _rpcListenFn(eventType: any, ...args: any[]): void;
}
import { BaseRPCAdapter } from "../base";