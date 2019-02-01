import { Injectable } from '@angular/core';
import { LANGUAGES } from './app-data-languages';
import { JszipService } from '../lib/services/jszip.service';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class AppData {
  public languages: any = LANGUAGES;

  public previewSrc: any;
  public previewData = {
    id: 1,
    name: '',
    options: {
      logo: 'data:image/jpeg;base64,/9j/4QnARXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAeAAAAcgEyAAIAAAAUAAAAkIdpAAQAAAABAAAApAAAANAADg+mAAAnEAAOD6YAACcQQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykAMjAxOTowMjowMSAxODoxMDowNwAAA6ABAAMAAAAB//8AAKACAAQAAAABAAAA0qADAAQAAAABAAAAUgAAAAAAAAAGAQMAAwAAAAEABgAAARoABQAAAAEAAAEeARsABQAAAAEAAAEmASgAAwAAAAEAAgAAAgEABAAAAAEAAAEuAgIABAAAAAEAAAiKAAAAAAAAAEgAAAABAAAASAAAAAH/2P/tAAxBZG9iZV9DTQAC/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAPgCgAwEiAAIRAQMRAf/dAAQACv/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A9VSSSSUpJJJJSkkkklKUS9jXNY5wDnztaTqY1O1SXP8A1j6VnnMxevdMLrcvp0zhk+22p38+ylp9teQ9n/bns/0daS/HESlwmXDd0T+9+i9AuN+u31nzsHJZ0zpz/QeaxbfeAC4Bxc2uqrfLW/R3veuqwM7G6jh1ZuK7fTc3c08EfmuY8fm2Vv8AZYz99ebfXW+u76y5JrIcKmV1OI1G5o3Pb/Z9TagTo2OSxCWYicb4ATR/e+X1Obd1TqmRPr5uRaHN2ODrXQWzOxzWlrHNQxl5vqB4y7mWEtHrGyyRt9tb3lrvUd6H/qtCSTHX4YjYAfR9b6LmdOuxK8bDzm578djRbZ6nqPJj+ct3OfZ73fvLRXijH2VWC2p7qrWztsrcWPE6Ha9m1zV6N9TvrN+1aDhZjh+0Mdo9xgesz/SsbP8AOM/7Uf8Abn+ETwXK5rkpYwckTxx/S/ej4vSpJJItJSSSSSlJJJJKf//Q9VSSSSUpJJJJSkkkklObZ9Y+iU3DHvy2UXOIDa7Q6sncdrXD1Ws9m78/6CsZ3UsLp1YtzbfRqP8AhHA7B/XsaNlfP+EXPfWjoo631Q4YIbfXgutxnOnbv9VrXV2N/wBHc39G7/R/TWRg9fyLeg5/QeoAszsSsiovPuc2tzd9Fm76V9H/AIPShbbjy0JxjKJO49yF+qMZ/pxbX1ncMLf1Dome/AfmD1MnEIdU28mGOycVt7A37bt/n21/pbav0385/PcXzrMk6kkySTySV6B/jK/5BqA0P2lsHw9ly5rrmDRkZN+T0yi1n2eiq/OpfUavp+w5OJjuYx3ot2Odk/4P/CU/4RAtzk8g9qN/pEjiP9ThjESl/helxE9db7bGVViX2ODGCQJc47Wjc6G/SUQQRI1BSIBEHUFNbjcZ0brNj31s6fkl9Ql7fScI/wA8Na7+yur+rf1Iyqchmf1Ox2PbS6aaaHiSC2Hercz6P09np1f56yfqz9aOpYObjYl1xu6fY8VOrsIJZ6h2ttZfZ72trf8A4N9np+mvTE4AOdznMZoeiogSHzR3I/7lSSSSc5qkkkklKSSSSU//0fVUkkklKSSSSUpJJJJTh/aZ+tDLRRkGg4po9f0bBWLDY2wM3ln7rf53+Z/4RUfrj9Wftrq+q4Ve7Locw31tEm2trgZa387Ip/M/0lf6L/RLqkkKZo5zCcZQ04Rw/wB4eLyX+MCnKz8GnAwsa/IubaLH+nW4sa3ZYzW2PT+k/wCgxTyOq5DMNl+D0rOPVhjfZq99Jaysu2++57v0VjK7Gep+j9RdNfRXkVOptBLH8gEtPjo9ha9q4n6n1P6s3qYz8zLcMd4bTb9qua6sH1JLXtta327G/wA4kd/NmxSicPqHpwmz/W930tT62/VN/TZ6jhAvw3R9oY0fzT/zrmtb/wBp7He5/wD3Hf8A8B/Ncwuz+rV3UuvdK6l0+7Ktu+zOjB6huc1+9wsDW2WMj1mfQsfW/f8Aor/Tt/wa5BuLf9mtyNkMxntqyG/nVl0tY6xv+idYx1O//Sppb/LykBLHkkJTxkRvuJ/Iic3c0t4kRK9e6DnftDo+Jl6zZU3duMnc39HZLvzve1eRL0P/ABduaehWNHLcmwO1nkMd/Z+kjHdi+IxBxCXWMv8ApPUpJJJzkqSSSSUpJJJJT//S9VSSSSUpJJJJSkkkklKSSSSUpeY9A6M7rPTutU49jm5VdjXVBtha1+tv6C9jXCt9du3buf8Aza9Gz/sX2Sz7fs+ywPV9T6MSI3/2lQw/+av2ur7B9i+1a+l9m9PfEHd/Mfm7EC2uWySjCYhGUpEw1iOIR4DY4v77m/UPrNOV089LextOXgaOrADC5k7fVdWP8Kx/6LJ/4X3/AOFWX1TpmVifXI0YYHp9dqex8iQ1rx+vv2/Re+rZ9pZ/wlq6j/sZ/aQ2/Y/2l6hjb6fr+pHv+h+m37P5xXrfsX2uj1fT+17bPs+6N+32ev6X53+i9TakkZSMuScMcqlE8cKvgmf/AF4+a/Wj6tW9DyBZVNnTrjFNh1LHH/tPa7/zzZ/hP+MXTf4uag3o19se6zJfJmdGtrYPZ+Yug6r+zv2dkftPZ9h2H1/U+jt/6rd+5s/Sb/5tYf1GpwqKOoV4GQ7KxftO6q5zXNMGuv8AR2MtZX+mq/wj2/zn/gaFC2XLlyT5aUckZRlEx9UokCcf++enSSSTnPUkkkkpSSSSSn//2f/tEe5QaG90b3Nob3AgMy4wADhCSU0EJQAAAAAAEAAAAAAAAAAAAAAAAAAAAAA4QklNBDoAAAAAAO8AAAAQAAAAAQAAAAAAC3ByaW50T3V0cHV0AAAABQAAAABQc3RTYm9vbAEAAAAASW50ZWVudW0AAAAASW50ZQAAAABJbWcgAAAAD3ByaW50U2l4dGVlbkJpdGJvb2wAAAAAC3ByaW50ZXJOYW1lVEVYVAAAAAEAAAAAAA9wcmludFByb29mU2V0dXBPYmpjAAAAEQBBAGoAdQBzAHQAZQAgAGQAZQAgAHAAcgB1AGUAYgBhAAAAAAAKcHJvb2ZTZXR1cAAAAAEAAAAAQmx0bmVudW0AAAAMYnVpbHRpblByb29mAAAACXByb29mQ01ZSwA4QklNBDsAAAAAAi0AAAAQAAAAAQAAAAAAEnByaW50T3V0cHV0T3B0aW9ucwAAABcAAAAAQ3B0bmJvb2wAAAAAAENsYnJib29sAAAAAABSZ3NNYm9vbAAAAAAAQ3JuQ2Jvb2wAAAAAAENudENib29sAAAAAABMYmxzYm9vbAAAAAAATmd0dmJvb2wAAAAAAEVtbERib29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFcJqgAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAAXCaoAAEAAgBcJqgAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgAAOEJJTQQCAAAAAAACAAA4QklNBDAAAAAAAAEBADhCSU0ELQAAAAAABgABAAAAAzhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANnAAAABgAAAAAAAAAAAAAAUgAAANIAAAAZAG4AZQByAHYALQBsAG8AZwBvAC0AcABuAGcALQB0AHIAYQBuAHMAcABhAHIAZQBuAHQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAANIAAABSAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAABSAAAAAFJnaHRsb25nAAAA0gAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAAAxFU2xpY2VPcmlnaW4AAAANYXV0b0dlbmVyYXRlZAAAAABUeXBlZW51bQAAAApFU2xpY2VUeXBlAAAAAEltZyAAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAAUgAAAABSZ2h0bG9uZwAAANIAAAADdXJsVEVYVAAAAAEAAAAAAABudWxsVEVYVAAAAAEAAAAAAABNc2dlVEVYVAAAAAEAAAAAAAZhbHRUYWdURVhUAAAAAQAAAAAADmNlbGxUZXh0SXNIVE1MYm9vbAEAAAAIY2VsbFRleHRURVhUAAAAAQAAAAAACWhvcnpBbGlnbmVudW0AAAAPRVNsaWNlSG9yekFsaWduAAAA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ZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDItMDFUMTg6MDA6MDUrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAyLTAxVDE4OjEwOjA3KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTAyLTAxVDE4OjEwOjA3KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUI1OUNCQjAzNzI2RTkxMTg1MjNBMTlFOEQwMTk1ODkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUE1OUNCQjAzNzI2RTkxMTg1MjNBMTlFOEQwMTk1ODkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5QTU5Q0JCMDM3MjZFOTExODUyM0ExOUU4RDAxOTU4OSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OUE1OUNCQjAzNzI2RTkxMTg1MjNBMTlFOEQwMTk1ODkiIHN0RXZ0OndoZW49IjIwMTktMDItMDFUMTg6MDA6MDUrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvcG5nIHRvIGltYWdlL2pwZWciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlCNTlDQkIwMzcyNkU5MTE4NTIzQTE5RThEMDE5NTg5IiBzdEV2dDp3aGVuPSIyMDE5LTAyLTAxVDE4OjEwOjA3KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/uACFBZG9iZQBkAAAAAAEDABADAgMGAAAAAAAAAAAAAAAA/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAQcHBw0MDRgQEBgUDg4OFBQO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',
      social: ''
    },
    refresh: 0,
    style : `
      <style>
        body{ margin: 0; font-size: 11px; }
        ::-webkit-scrollbar {
          width:  4px;
          height: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
      </style>
    `
  };

  constructor(private jszip: JszipService, public sanitizer: DomSanitizer) {
    this.checkAll();
  }

  public checkAll() {
    let copyLanguages = this.languages;

    copyLanguages = this.checkEmptyLanguages(copyLanguages);
    copyLanguages = this.checkTemplatesTags(copyLanguages);
    copyLanguages = this.trimHtml(copyLanguages);

    return this.languages = copyLanguages;
  }

  // set/update languages[x].empty
  public checkEmptyLanguages(languagesObj: any) {
    const languagesClone = languagesObj;

    for (const langId in languagesClone) {
      let emptyLanguage = true;
      const thisLanguage = languagesClone[langId];

      for (const emailId in thisLanguage.emails.templates) {
        if (thisLanguage.emails.templates[emailId].html.trim().length > 0) {
          emptyLanguage = false;
        }
      }
      thisLanguage.empty = emptyLanguage;
    }
    return languagesClone;
  }

  // set/update languages[x].emails.header.tags,
  //    languages[x].emails.footer.tags,
  //    languages[x].emails.templates[x].tags
  public checkTemplatesTags(languagesObj: any) {
    const languagesClone = languagesObj;

    for (const langId in languagesClone) {
      const thisLanguage = languagesClone[langId];

      // set header 'tags' property
      thisLanguage.emails.header.tags = {
        empty: thisLanguage.emails.header.html.trim().length === 0
      };

      // set footer 'tags' property
      thisLanguage.emails.footer.tags = {
        empty: thisLanguage.emails.footer.html.trim().length === 0
      };

      for (const emailId in thisLanguage.emails.templates) {

        // set template 'tags' property
        thisLanguage.emails.templates[emailId].tags = {
          empty: thisLanguage.emails.templates[emailId].html.trim().length === 0,
          noSubject: thisLanguage.emails.templates[emailId].subject.trim().length === 0,
          customHeader: typeof thisLanguage.emails.templates[emailId].header === 'undefined' ? false : true,
          customFooter: typeof thisLanguage.emails.templates[emailId].footer === 'undefined' ? false : true
        };

        // set custom header 'tags' property
        if (typeof thisLanguage.emails.templates[emailId].header !== 'undefined') {
          thisLanguage.emails.templates[emailId].header.tags = {
            empty: thisLanguage.emails.templates[emailId].header.html.trim().length === 0
          };
        }
        // set custom footer 'tags' property
        if (typeof thisLanguage.emails.templates[emailId].footer !== 'undefined') {
          thisLanguage.emails.templates[emailId].footer.tags = {
            empty: thisLanguage.emails.templates[emailId].footer.html.trim().length === 0
          };
        }
      }
    }
    return languagesClone;
  }

  // get language struct by key 'es'
  public getLanguage(key: string) {
    const languagesClone = this.languages;
    let findedLang: any = {};
    let _langId: any;

    for (const langId in this.languages) {
      const thisLanguage = languagesClone[langId];

      if (thisLanguage.key === key) {
        findedLang = thisLanguage;
        _langId = langId;
      }
    }

    findedLang.id = _langId;

    return findedLang;
  }

  // get language id by key 'es'
  public getLangIdByKey(key: string) {
    const languagesClone = this.languages;
    let findedLangId: any;

    for (const langId in this.languages) {
      const thisLanguage = languagesClone[langId];

      if (thisLanguage.key === key) {
        findedLangId = langId;
      }
    }

    return findedLangId;
  }

  // get email data by lang key 'es' and email id 1
  public getEmailData(langKey: string, emailId: any) {
    const langData = this.getLanguage(langKey);
    let emailData: any;

    for (const templateId in langData.emails.templates) {
      const thisTemplate = langData.emails.templates[templateId];

      if (parseInt(templateId) === parseInt(emailId)) {
        emailData = thisTemplate;
      }
    }

    return emailData;
  }

  // set string value 'html' or 'subject'
  public setStringVal(langKey: string, path: string, code: string) {
    let evalPath = 'this.languages';
    for (const langId in this.languages) {
      if (this.languages[langId].key === langKey) {
        evalPath += '[' + langId + ']';
      }
    }

    path.split('.').forEach(valueKey => {
      evalPath += '.' + valueKey;
    });

    const toEval = evalPath + '=`' + code + '`;';
    eval(toEval);

    this.languages = this.checkAll();
  }

  // trim all html contents first empty '\n'
  public trimHtml(languagesObj: any) {
    const languagesClone = languagesObj;

    for (const langId in languagesClone) {
      const thisLanguage = languagesClone[langId];

      thisLanguage.emails.header.html = thisLanguage.emails.header.html.replace(/^\n{1}/i, '');
      thisLanguage.emails.footer.html = thisLanguage.emails.footer.html.replace(/^\n{1}/i, '');

      for (const emailId in thisLanguage.emails.templates) {

        thisLanguage.emails.templates[emailId].html = thisLanguage.emails.templates[emailId].html.replace(/^\n{1}/i, '');

        if (typeof thisLanguage.emails.templates[emailId].header !== 'undefined') {
          thisLanguage.emails.templates[emailId].header.html = thisLanguage.emails.templates[emailId].header.html.replace(/^\n{1}/i, '');
        }
        if (typeof thisLanguage.emails.templates[emailId].footer !== 'undefined') {
          thisLanguage.emails.templates[emailId].footer.html = thisLanguage.emails.templates[emailId].footer.html.replace(/^\n{1}/i, '');
        }
      }
    }
    return languagesClone;
  }

  // execute download zip by language key
  public generateLanguageZip(langKey: string) {
    const data = this.getLanguage(langKey);
    const emailsArray = [];

    for (const templateId in data.emails.templates) {
      const template = data.emails.templates[templateId];

      let thisHeader = data.emails.header.html;
      if (template.tags.customHeader) {
        if (!template.header.tags.empty) {
          thisHeader = template.header.html;
        }
      }

      const thisBody = template.html;

      let thisFooter = data.emails.footer.html;
      if (template.tags.customFooter) {
        if (!template.footer.tags.empty) {
          thisFooter = template.footer.html;
        }
      }

      emailsArray.push({
        fileName: template.name + ' [id ' + templateId + '] [' + data.key + '].html',
        content: thisHeader + thisBody + thisFooter
      });
    }

    const zip = this.jszip.setZip(emailsArray);
    this.jszip.saveAsZip(zip, 'emilio-generator [id ' + data.id + '] [' + data.key + '].zip');
  }

  // execute download html by language key and email id
  public generateEmailHtml(langKey: string, emailId: any) {
    const data = this.getLanguage(langKey);

    for (const templateId in data.emails.templates) {
      if (parseInt(templateId) === parseInt(emailId)) {
        const template = data.emails.templates[templateId];

        let thisHeader = data.emails.header.html;
        if (template.tags.customHeader) {
          if (!template.header.tags.empty) {
            thisHeader = template.header.html;
          }
        }

        const thisBody = template.html;

        let thisFooter = data.emails.footer.html;
        if (template.tags.customFooter) {
          if (!template.footer.tags.empty) {
            thisFooter = template.footer.html;
          }
        }

        const fileName = template.name + ' [id ' + templateId + '] [' + data.key + '].html';
        const content = thisHeader + thisBody + thisFooter;
        this.jszip.saveAsHtml(content, fileName, 'text/html;charset=utf-8');

        return true;
      }
    }
    return false;
  }

  // set sanitized src for iframe with email preview
  public setPreviewIframeContent(langKey: string) {

    this.previewSrc = '';
    this.previewData.refresh ++;

    const langId = this.getLanguage(langKey).id;

    let header = this.languages[langId].emails.header.html;
    if (this.languages[langId].emails.templates[this.previewData.id].tags.customHeader) {
      header = this.languages[langId].emails.templates[this.previewData.id].header.html;
    }

    const body = this.languages[langId].emails.templates[this.previewData.id].html;

    let footer = this.languages[langId].emails.footer.html;
    if (this.languages[langId].emails.templates[this.previewData.id].tags.customFooter) {
      footer = this.languages[langId].emails.templates[this.previewData.id].footer.html;
    }

    let html = header + body + footer;

    // Replaces
    html = html.replace(new RegExp('[%]{1,2}imagesURL[%]{1,2}logoEmail.(jpg|png|gif|jpeg)', 'g'), this.previewData.options.logo);
    // Preview replace data
    html = html.replace(new RegExp('href=(["\'])(.*?)\\1', 'g'), 'href="javascript:void(0)"');

    const iframeSrc = 'data:text/html;charset=utf-8,' +
      encodeURI('<html><head><body class="refresh-' + this.previewData.refresh + '">' + this.previewData.style) +
      encodeURI(html) +
      encodeURI('</body></html>');

    this.previewSrc = this.sanitizer.bypassSecurityTrustResourceUrl(iframeSrc);
  }

  // get sanitized src for iframe with email preview
  public getPreviewIframeContent() {
    return this.previewSrc;
  }

  public delCustomHeader(langKey: string, emailId: any) {
    const data = this.getEmailData(langKey, emailId);
    delete data.header;
    this.checkAll();
    this.previewData.id = emailId;
    this.setPreviewIframeContent(langKey);
  }

  public setCustomHeader(langKey: string, emailId: any) {
    const langData = this.getLanguage(langKey);
    const emailData = this.getEmailData(langKey, emailId);
    console.log(langData);

    emailData.header = {
      html: langData.emails.header.html
    };
    this.checkAll();
    this.previewData.id = emailId;
    this.setPreviewIframeContent(langKey);
  }

  public delCustomFooter(langKey: string, emailId: any) {
    const data = this.getEmailData(langKey, emailId);
    delete data.footer;
    this.checkAll();
    this.previewData.id = emailId;
    this.setPreviewIframeContent(langKey);
  }

  public setCustomFooter(langKey: string, emailId: any) {
    const langData = this.getLanguage(langKey);
    const emailData = this.getEmailData(langKey, emailId);
    emailData.footer = {
      html: langData.emails.footer.html
    };
    this.checkAll();
    this.previewData.id = emailId;
    this.setPreviewIframeContent(langKey);
  }
}
