export function getLocation(event) {
   event.preventDefault();
   const input = new window.FormData(event.target);
   let location = input.get("queryCity");
   if (location === undefined) return;
   return location
 }