
export type BlockProps = {
    id: string,
    type: string,
    content: {
        [key: string]: any,
    },
    children: {
        [key: string]: Array<BlockProps>,
    },
    position: number,
    medias: Array<{
        url: string,
        alt: string,
        role: string,
        width: number,
        height: number,
        metadatas: {
            video: string,
            caption: string,
        }
    }>,
    files: Array<{
        url: string,
        role: string,
    }>,
}

// export function useBlockData(block:BlockProps) {
//     return {
//         content: block.content,
//         medias: block.medias,
//         files: block.files,
//     }
// }
