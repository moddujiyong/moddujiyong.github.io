import "./calendar.scss";
export default function Calendar() {
  
  return (
    <div className="calendar">
    <iframe className="googleCalendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FSeoul&src=dW5pdGFlazFAbmF2ZXIuY29t&src=aHRzNGdwZmtyamhvaWV1Y2o1cWEzOGJraThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=a28uc291dGhfa29yZWEjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23D50000&color=%230B8043&color=%2333B679" 
          style={{border:0}} width="800" height="600" frameorder="0" scrolling="no"/> 
    </div>
  )
}

