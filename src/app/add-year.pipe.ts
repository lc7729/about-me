import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "addYear"
})
export class AddYearPipe implements PipeTransform {
  transform(year: string): string {
    return year + " yr";
  }
}
