import { Component, OnInit } from '@angular/core';
import anchorme from "anchorme";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public content = `
  AAAAAAAAAAAAAAAAAAAAAAAA
  <div style="background-color:'red'">

  <iframe width="100%" src="https://www.youtube.com/embed/KSOn5tmDiwI"/>
  </div>
  `
  public htmlContent = ''
  constructor() { }

  ngOnInit(): void {
  }

  publishComment() {
    this.htmlContent = anchorme({
      input: this.content,
      options: {
        exclude: true,
        specialTransform: [

          {
            test: /youtube\.com\/watch\?v\=/,
            transform: str =>
              `
                    <a href="${str}">${str}</a> <br/>
                      <iframe src="https://www.youtube.com/embed/${str.replace(
                /.*watch\?v\=(.*)$/,
                "$1"
              )}"/>`
          }
        ]
      }
    })
  
  }
}

