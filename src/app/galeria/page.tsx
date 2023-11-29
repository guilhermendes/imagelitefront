
import { Template, ImageCard } from '@/components'

export default function GaleriaPage(){
    return (
        <Template>
            <section className='grid grid-cols-4 gap-8' >
                <ImageCard nome="lorem ipsum" tamanho="10mb" dataUpload='01/01/2024' src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZsMjMxNDY4ODE2NTQtaW1hZ2Uta295NWoyeG4uanBn.jpg"/>
                <ImageCard nome="lorem ipsum"src="https://images.unsplash.com/photo-1546587348-d12660c30c50?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D"/>
                <ImageCard nome="lorem ipsum"src="https://img.freepik.com/free-photo/shiraito-waterfall-autumn-japan_335224-193.jpg"/>
                <ImageCard nome="lorem ipsum"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjb37k7YjRZZzndIiwtRVUw7YBDXCAVZtfQ&usqp=CAU"/>
                <ImageCard nome="lorem ipsum"src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"/>
                <ImageCard nome="lorem ipsum" src="https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg"/>
            </section>
        </Template>
    )
}