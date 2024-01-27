import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { DatabaseType } from '../enums/enums';

@Injectable()
export class DatabaseTypeValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (!(value in DatabaseType)) {
      throw new BadRequestException(
        `Invalid value for the "${metadata.data}" query parameter.`,
      );
    }
    return value;
  }
}
