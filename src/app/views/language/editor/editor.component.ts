import { Component, Input, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { AppData } from 'src/app/data/app-data';

@Component({
  selector: 'eg-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit {

  @Input() content: any;
  @Input() langKey: string;
  @Input() contentKey: string;
  @Input() label: string;
  @ViewChild('editor') editor: any;

  aceOptions = {
    useWorker: false,
    // maxLines: 15,
    minLines: 10,
    tabSize: 2,
    showPrintMargin: false
  };

  fullScreen = false;

  constructor(
    private renderer: Renderer2,
    private appData: AppData
  ) { }


  ngAfterViewInit() {
    const renderer = this.renderer;
    const editorInstance = this.editor.getEditor();
    editorInstance.commands.addCommand({
      name: 'Toggle Fullscreen',
      bindKey: 'F11',
      exec: function(editor) {

        if (this.fullScreen) {
          renderer.removeClass(document.body, 'editor-full-screen');
          renderer.removeClass(editor.container, 'editor-full-screen');
        } else {
          renderer.addClass(document.body, 'editor-full-screen');
          renderer.addClass(editor.container, 'editor-full-screen');
        }

        editorInstance.setOptions({
          maxLines: (this.fullScreen ? 15 : window.innerHeight / 14)
        });
        editorInstance.resize();

        this.fullScreen = !this.fullScreen;
      }
    });
  }

  onChangeAce(code) {
    this.appData.setStringVal(this.langKey, this.contentKey, code);
    this.appData.setPreviewIframeContent(this.langKey);
  }

}
