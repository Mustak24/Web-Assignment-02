export default function TypingText({text='', className, speed=100}){
    return (
        <p className={className} style={{display: 'flex', alignItems: 'center'}}>
            {
                text.split('').map((char, index) => (
                    <span style={{
                        animation: 'opacity-scale-0-to-1',
                        animationDelay: `${index*speed}ms`,
                        animationDuration: '100ms',
                        animationFillMode: 'forwards',
                        opacity: 0,
                        scale: 0,
                        paddingInline: char === ' ' ? 3 : 0
                    }} >{char}</span>
                ))
            }
        </p>
    )
}