import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value en el pipe: ', value)

    const ageNumber = parseInt(value.age.toString(), 10);

    if (isNaN(ageNumber)){
      throw new HttpException('La edad debe de ser un estado', HttpStatus.BAD_GATEWAY)
    }

    return {...value, age:ageNumber};
  }
}
