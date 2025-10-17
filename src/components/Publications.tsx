import { FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Research contributions in machine learning and computer vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    Brain Tumor MRI Image Segmentation using Deep Learning
                  </CardTitle>
                  <CardDescription className="text-base">
                    International Journal of Innovative Research in Technology · Apr 26, 2023
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The proposed work aims to develop a segmentation model using Deep Learning Technique, which is a sub-part of Machine Learning. Using a CNN (Convolutional Neural Networks) model preferably Resnet50 Architecture, we aim to develop a model to detect tumours present in the patients' brain MRI images. Initially, the model will classify the given dataset and segregate into images having tumour and no-tumour. Additionally, the model will highlight the tumour mask in the input image and will display the predicted mask along with the actual mask of the brain tumour. Our project mainly focuses on localization of the tumour and displaying its mask.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Deep Learning</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">CNN</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ResNet50</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Medical Imaging</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Computer Vision</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;
