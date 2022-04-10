

export default function Footer (){
  return (
    <footer class="w-full border-t-2 border-gray-100 py-6 px-4">
        <div class="px-4 pt-3 pb-4 border-b -mx-4 border-gray-400">
            <div class="max-w-xl mx-auto">
                <h2 class="text-xl text-left inline-block font-semibold">Join Our Newsletter</h2>
                <p class="text-xs my-4 pl-px">
                    Latest news ,articles and updates montly delevered to your inbox.
                </p>
                <form action="#!" class="mt-2">
                    <div class="flex items-center">
                        <input type="email" class="w-full px-2 py-4 mr-2 text-gray-100 shadow-inner rounded-md border-gray-200 bg-black border-2 focus:outline-none" required />
                        <button class="bg-white text-gray-800 px-5 font-black py-2 rounded shadow " style={{marginLeft: '-7.8rem'}}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row items-center justify-between my-4">
            <p class="text-white pt-6">All rights reserved</p>
            <p class="inline-flex text-white px-2 pt-6">Built with 
                <svg fill="#!e53e3e" viewBox="0 0 24 24"  class="w-5 h-5 mx-1 pt-px text-red-600" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>by GTA Gaming Token(GTA).</p>
            <div class="flex items-center pt-6 space-x-4">
                <a href="https://discord.gg/7EC2wmkwmh">
                    <i className="fab fa-discord" />
                </a>
                <a href="https://github.com/GTAGamingToken">
                    <i className="fab fa-github" />
                </a>
                <a href="https://t.me/grandthefttoken">
                   <i className="fab fa-telegram" />
                </a>
                <a href="https://twitter.com/GTAgamingtoken">
                    <svg class="h-6 w-6 fill-current text-white mr-6" viewBox="0 0 512 512">
                        <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"/>
                    </svg>
                </a>
            </div>
        </div>
    </footer>
  )
}