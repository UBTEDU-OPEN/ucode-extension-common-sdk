import Features from '../Features';
export declare function hasFeature(feature: string): Promise<void>;
export declare function requestFeature(feature: Features): Promise<void>;
export declare function checkAndRequestCameraPermission(): Promise<void>;
export declare function checkAndRequestLocationPermission(): Promise<void>;
export declare function checkAndRequestStoragePermission(): Promise<void>;
export declare function checkAndRequestAudioPermission(): Promise<void>;
export declare function checkAndRequestPermission(features: Features): Promise<void>;
export declare function quitApplication(): Promise<void>;
export declare function getLoudness(time: number): Promise<number>;
export declare function getAppVersion(): Promise<string>;
export declare function getWXAuthorization(): Promise<string>;
export declare function getQQAuthorization(): Promise<string>;
export declare function saveToAlbum(imageDataKey: string, imageName: string, albumName: string): Promise<void>;
export declare function exportFile(key: string, name: string, suffix: string): Promise<void>;
export declare function appReady(): Promise<void>;
