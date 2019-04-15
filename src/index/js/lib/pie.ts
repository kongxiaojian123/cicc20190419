interface pieData{
    range:[number,number];
    color:string;
}
interface pieOption{
    progress:number;
    data:pieData[];
}
export default class Pie{
    private ctx:CanvasRenderingContext2D;
    private canvasWidth:number=280;
    constructor(private canvas:HTMLCanvasElement) {
        this.canvas.width = this.canvas.height = this.canvasWidth;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.rotate(-Math.PI/2);
        this.ctx.translate(-this.canvasWidth/2,this.canvasWidth/2);
    }
    public render(pieOption:pieOption){
        this.ctx.clearRect(-this.canvasWidth/2,-this.canvasWidth/2,this.canvasWidth,this.canvasWidth);
        Object.keys(pieOption.data).forEach(i=>{
            const item = pieOption.data[i];
            if(pieOption.progress>=item.range[0]){
                this.ctx.fillStyle=item.color;
                this.ctx.beginPath();
                this.ctx.arc(0,0,this.canvasWidth/2,item.range[0]*Math.PI*2,Math.min(pieOption.progress,item.range[0]+item.range[1])*2*Math.PI);
                this.ctx.lineTo(0,0);
                this.ctx.fill();
            }
        });
    }
}
