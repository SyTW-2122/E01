/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
interface Iproduct extends Document {
    title: string;
    price: string;
    description: string;
    imagePath: string;
}
declare const _default: import("mongoose").Model<Iproduct, {}, {}, {}>;
export default _default;
